const citations = {
  zhu2026fta: `@article{zhu2026failure,
  title   = {Failure-Transparent Agents: Benchmarking Post-Failure Reporting in Tool-Using Language Models},
  author  = {Zhu, Junru and Xie, Shiming and Chen, Aime Lu Fan and Ding, Xiaoqing and Tang, Chunxin and Qi, Ruoyu and Fei, Yulang},
  journal = {arXiv preprint arXiv:2609.35732},
  year    = {2026},
  url     = {https://arxiv.org/abs/2609.35732}
}`,
  zhu2026calibration: `@article{zhu2026stress,
  title   = {Stress-Testing Structure-Aware Calibration of Malware Graph Neural Networks under Type Shift},
  author  = {Zhu, Junru and Yang, Yixin and Ding, Xiaoqing and Qi, Ruoyu},
  journal = {arXiv preprint arXiv:2609.28517},
  year    = {2026},
  url     = {https://arxiv.org/abs/2609.28517}
}`,
  zhu2026partition: `@article{zhu2026partition,
  title   = {Partition-Matched Evaluation of Community Features under Distribution Shift in Android Malware Function-Call Graphs},
  author  = {Zhu, Junru and Yang, Yixin and Ding, Xiaoqing and Qi, Ruoyu},
  journal = {arXiv preprint arXiv:2609.25256},
  year    = {2026},
  url     = {https://arxiv.org/abs/2609.25256}
}`,
  zhu2026residual: `@article{zhu2026residual,
  title   = {Residual Community Prototypes Under-Reject Held-Out Malware Families in FCG-MFD},
  author  = {Zhu, Junru and Yang, Yixin and Ding, Xiaoqing and Qi, Ruoyu},
  journal = {arXiv preprint arXiv:2609.24980},
  year    = {2026},
  url     = {https://arxiv.org/abs/2609.24980}
}`,
  zhu2026leaseguard: `@article{zhu2026leaseguard,
  title   = {LeaseGuard: Incumbent-Preserving Admission Control for Privileged LLM Agents},
  author  = {Zhu, Junru and Yang, Yixin and Ding, Xiaoqing and Qi, Ruoyu},
  journal = {arXiv preprint arXiv:2609.24077},
  year    = {2026},
  url     = {https://arxiv.org/abs/2609.24077}
}`,
  ma2026hybrid: `@article{ma2026hybrid,
  title   = {A Hybrid Clique-Based Method with Structural Feature Node Extraction for Community Detection in Overlapping Networks},
  author  = {Ma, Sicheng and Zhang, Lixiang and Chen, Guocai and Dai, Zeyu and Zhu, Junru and Fang, Wei},
  journal = {Computers, Materials \\& Continua},
  volume  = {87},
  number  = {1},
  pages   = {1--10},
  year    = {2026},
  doi     = {10.32604/cmc.2025.073572}
}`,
  zhang2018android: `@inproceedings{zhang2018android,
  title     = {Android Malware Detection Based on Deep Learning},
  author    = {Zhang, Jianming and Zou, Futai and Zhu, Junru},
  booktitle = {2018 IEEE 4th International Conference on Computer and Communications (ICCC)},
  pages     = {2190--2194},
  year      = {2018},
  publisher = {IEEE},
  doi       = {10.1109/CompComm.2018.8781037}
}`,
  zhu2026swarmsafe: `@misc{zhu2026swarmsafe,
  title  = {SwarmSafeBench: Evaluating Emergent Coordination and Safety Failures in Multi-Agent Systems},
  author = {Zhu, Junru},
  year   = {2026},
  note   = {Public manuscript and benchmark},
  url    = {https://github.com/junru-zhu/swarmsafe-bench}
}`,
  zhu2026token: `@misc{zhu2026token,
  title  = {Token-Budgeted Escalation for Financial Document QA: Cost Is Predictable, Benefit Is the Bottleneck},
  author = {Zhu, Junru and Yang, Yixin and Ding, Xiaoqing and Qi, Ruoyu},
  year   = {2026},
  note   = {Public manuscript},
  url    = {https://github.com/junru-zhu/token-budgeted-escalation-financial-qa}
}`
};

const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const citation = citations[button.dataset.copy];
    if (!citation) return;
    try {
      await navigator.clipboard.writeText(citation);
      showToast("BibTeX copied");
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = citation;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      showToast("BibTeX copied");
    }
  });
});
