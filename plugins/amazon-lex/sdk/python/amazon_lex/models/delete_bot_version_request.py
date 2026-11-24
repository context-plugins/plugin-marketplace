from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteBotVersionRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot that contains the version."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot to delete."""

    skip_resource_in_use_check: Optional[bool] = Field(default=UNSET, alias="skipResourceInUseCheck")
    """By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version
    before it is deleted and throws a ResourceInUseException exception if the version is being used by another resource.
    Set this parameter to true to skip this check and remove the version even if it is being used by another
    resource."""


class DeleteBotVersionRequestDict(TypedDict):
    bot_id: str
    bot_version: str
    skip_resource_in_use_check: NotRequired[bool]
