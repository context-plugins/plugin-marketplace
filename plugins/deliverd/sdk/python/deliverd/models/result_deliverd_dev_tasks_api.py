from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity_deliverd_dev_tasks_api import SeverityDeliverdDevTasksApiOrStr


class ResultDeliverdDevTasksApi(SdkBaseModel):
    metric: str
    """What was measured, as the tool names it: pass_rate, accuracy, attack_success_rate"""

    value: float
    """The measured value"""

    passed: Optional[bool] = UNSET
    """The tool's own verdict on this result, where it gives one"""

    severity: Optional[SeverityDeliverdDevTasksApiOrStr] = UNSET
    """How serious a failure of this result is: low, medium, high or critical"""

    category: Optional[str] = UNSET
    """A grouping the tool gives it: a red-team plugin, a risk category, a dataset slice"""

    dataset: Optional[str] = UNSET
    url: Optional[str] = UNSET
    """The trace, row or run this result can be inspected at"""


class ResultDeliverdDevTasksApiDict(TypedDict):
    metric: str
    value: float
    passed: NotRequired[bool]
    severity: NotRequired[SeverityDeliverdDevTasksApiOrStr]
    category: NotRequired[str]
    dataset: NotRequired[str]
    url: NotRequired[str]
