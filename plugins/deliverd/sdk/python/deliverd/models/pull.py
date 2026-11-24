from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.source_deliverd_dev_tasks_api import SourceDeliverdDevTasksApiOrStr


class Pull(SdkBaseModel):
    """Read the results from a connected tool with the organisation's own keys, which you never hold. Instead of results
    or a report"""

    source: SourceDeliverdDevTasksApiOrStr
    """The connected tool to read from (Organisation → Integrations & webhooks): langfuse, langsmith, braintrust or
    weave"""

    experiment: Optional[str] = UNSET
    """The experiment's name; the newest with it is read. In LangSmith and Braintrust, also the name a run suffixed
    (credit-memo-v12 finds credit-memo-v12-1a2b3c4d); in Weave, the evaluation's name or its run's"""

    experiment_id: Optional[str] = Field(default=UNSET, alias="experimentId")
    """Or the experiment's id, exactly (in Weave, the evaluation run's call id)"""

    since: Optional[RFC3339DateTime] = UNSET
    """Look for it from this time; 90 days back when absent"""


class PullDict(TypedDict):
    source: SourceDeliverdDevTasksApiOrStr
    experiment: NotRequired[str]
    experiment_id: NotRequired[str]
    since: NotRequired[RFC3339DateTime]
