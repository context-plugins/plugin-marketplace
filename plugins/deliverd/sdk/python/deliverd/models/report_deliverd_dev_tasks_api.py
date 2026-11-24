from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.format_deliverd_dev_tasks_api import FormatDeliverdDevTasksApiOrStr


class ReportDeliverdDevTasksApi(SdkBaseModel):
    """A tool's own report, turned into results here. Instead of results"""

    format: FormatDeliverdDevTasksApiOrStr
    """The tool that wrote it: deliverd, promptfoo, inspect, garak, weave, braintrust, junit"""

    content: str
    """The report file as the tool wrote it"""


class ReportDeliverdDevTasksApiDict(TypedDict):
    format: FormatDeliverdDevTasksApiOrStr
    content: str
