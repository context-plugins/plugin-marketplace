from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_alias_test_execution_target import BotAliasTestExecutionTarget, BotAliasTestExecutionTargetDict


class TestExecutionTarget(SdkBaseModel):
    bot_alias_target: Optional[BotAliasTestExecutionTarget] = Field(default=UNSET, alias="botAliasTarget")


class TestExecutionTargetDict(TypedDict):
    bot_alias_target: NotRequired[BotAliasTestExecutionTargetDict]
