from __future__ import annotations

from typing import TypeAlias

from ..step import Step, StepDict
from ..step1 import Step1, Step1Dict
from ..step3 import Step3, Step3Dict
from ..step4 import Step4, Step4Dict

Step2: TypeAlias = Step | Step1 | Step1 | Step3 | Step4 | Step4 | Step4

Step2Dict: TypeAlias = StepDict | Step1Dict | Step1Dict | Step3Dict | Step4Dict | Step4Dict | Step4Dict
