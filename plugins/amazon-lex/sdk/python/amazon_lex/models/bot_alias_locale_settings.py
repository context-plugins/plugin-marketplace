from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .code_hook_specification import CodeHookSpecification, CodeHookSpecificationDict


class BotAliasLocaleSettings(SdkBaseModel):
    enabled: bool
    """Determines whether the locale is enabled for the bot. If the value is false, the locale isn't available for
    use."""

    code_hook_specification: Optional[CodeHookSpecification] = Field(default=UNSET, alias="codeHookSpecification")


class BotAliasLocaleSettingsDict(TypedDict):
    enabled: bool
    code_hook_specification: NotRequired[CodeHookSpecificationDict]
