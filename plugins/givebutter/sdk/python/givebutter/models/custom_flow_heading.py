from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CustomFlowHeading(SdkBaseModel):
    """Accepts a ``string`` value."""

    name: Literal["custom_flow_heading"] = "custom_flow_heading"
    value: OptionalNullable[str] = UNSET


class CustomFlowHeadingDict(TypedDict):
    name: Literal["custom_flow_heading"]
    value: NotRequired[str | None]
