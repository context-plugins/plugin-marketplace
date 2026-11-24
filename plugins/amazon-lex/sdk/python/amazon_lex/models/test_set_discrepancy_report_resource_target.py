from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_set_discrepancy_report_bot_alias_target import (
    TestSetDiscrepancyReportBotAliasTarget,
    TestSetDiscrepancyReportBotAliasTargetDict,
)


class TestSetDiscrepancyReportResourceTarget(SdkBaseModel):
    bot_alias_target: Optional[TestSetDiscrepancyReportBotAliasTarget] = Field(default=UNSET, alias="botAliasTarget")


class TestSetDiscrepancyReportResourceTargetDict(TypedDict):
    bot_alias_target: NotRequired[TestSetDiscrepancyReportBotAliasTargetDict]
