from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ToolAnnotations(SdkBaseModel):
    """Additional properties describing a Tool to clients.

    NOTE: all properties in ToolAnnotations are **hints**. They are not guaranteed to provide a faithful description of
    tool behavior (including descriptive properties like ``title``).

    Clients should never make tool use decisions based on ToolAnnotations received from untrusted servers."""

    title: Optional[str] = UNSET
    read_only_hint: Optional[bool] = Field(default=UNSET, alias="readOnlyHint")
    destructive_hint: Optional[bool] = Field(default=UNSET, alias="destructiveHint")
    idempotent_hint: Optional[bool] = Field(default=UNSET, alias="idempotentHint")
    open_world_hint: Optional[bool] = Field(default=UNSET, alias="openWorldHint")


class ToolAnnotationsDict(TypedDict):
    title: NotRequired[str]
    read_only_hint: NotRequired[bool]
    destructive_hint: NotRequired[bool]
    idempotent_hint: NotRequired[bool]
    open_world_hint: NotRequired[bool]
