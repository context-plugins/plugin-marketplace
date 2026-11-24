from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1ToolAnnotations(SdkBaseModel):
    """Annotations for a Tool."""

    open_world_hint: Optional[bool] = Field(default=UNSET, alias="openWorldHint")
    """Optional. Hint indicating if the tool interacts with the open world (e.g., internet)."""

    title: Optional[str] = UNSET
    """Optional. A human-readable title for the tool (if different from Tool.title)."""

    idempotent_hint: Optional[bool] = Field(default=UNSET, alias="idempotentHint")
    """Optional. Hint indicating if the tool is idempotent."""

    read_only_hint: Optional[bool] = Field(default=UNSET, alias="readOnlyHint")
    """Optional. Hint indicating if the tool is read-only."""

    destructive_hint: Optional[bool] = Field(default=UNSET, alias="destructiveHint")
    """Optional. Hint indicating if the tool may have destructive side effects."""

    additional_hints: Optional[dict[str, str]] = Field(default=UNSET, alias="additionalHints")
    """Optional. Additional hints which may help tools and not covered in defaults."""


class GoogleCloudApihubV1ToolAnnotationsDict(TypedDict):
    open_world_hint: NotRequired[bool]
    title: NotRequired[str]
    idempotent_hint: NotRequired[bool]
    read_only_hint: NotRequired[bool]
    destructive_hint: NotRequired[bool]
    additional_hints: NotRequired[dict[str, str]]
