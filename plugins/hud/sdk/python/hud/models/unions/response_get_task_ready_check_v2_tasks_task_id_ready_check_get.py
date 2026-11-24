from __future__ import annotations

from typing import TypeAlias

from ..ready_requirements_evaluation import ReadyRequirementsEvaluation, ReadyRequirementsEvaluationDict
from ..ready_requirements_not_configured import ReadyRequirementsNotConfigured, ReadyRequirementsNotConfiguredDict

ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet: TypeAlias = (
    ReadyRequirementsEvaluation | ReadyRequirementsNotConfigured
)

ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGetDict: TypeAlias = (
    ReadyRequirementsEvaluationDict | ReadyRequirementsNotConfiguredDict
)
