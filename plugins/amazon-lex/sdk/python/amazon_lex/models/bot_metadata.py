from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class BotMetadata(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the bot."""

    description: Optional[str] = UNSET
    """A description of the bot."""

    status: Optional[StatusOrStr] = UNSET
    """The status of the bot."""

    last_updated_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastUpdatedDate")
    """The date that the bot was updated. When you create a bot, the creation date and last updated date are the
    same."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """The date that the bot was created."""

    version: Optional[str] = UNSET
    """The version of the bot. For a new bot, the version is always $LATEST."""


class BotMetadataDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    status: NotRequired[StatusOrStr]
    last_updated_date: NotRequired[RFC3339DateTime]
    created_date: NotRequired[RFC3339DateTime]
    version: NotRequired[str]
