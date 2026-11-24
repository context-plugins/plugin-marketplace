from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteBotAliasRequest(SdkBaseModel):
    bot_alias_id: str = Field(alias="botAliasId")
    """The unique identifier of the bot alias to delete."""

    bot_id: str = Field(alias="botId")
    """The unique identifier of the bot associated with the alias to delete."""

    skip_resource_in_use_check: Optional[bool] = Field(default=UNSET, alias="skipResourceInUseCheck")
    """By default, Amazon Lex checks if any other resource, such as a bot network, is using the bot alias before it is
    deleted and throws a ResourceInUseException exception if the alias is being used by another resource. Set this
    parameter to true to skip this check and remove the alias even if it is being used by another resource."""


class DeleteBotAliasRequestDict(TypedDict):
    bot_alias_id: str
    bot_id: str
    skip_resource_in_use_check: NotRequired[bool]
