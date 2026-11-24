from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.border_style2 import BorderStyle2OrStr


class VisualSettings32(SdkBaseModel):
    """Optional styling applied to the section as a whole (background color, padding, borders, etc.)."""

    background_color: Optional[str] = UNSET
    """The background color of the block."""

    text_color: Optional[str] = UNSET
    """The text color of the block."""

    border_color: Optional[str] = UNSET
    """The border color of the block."""

    border_style: Optional[BorderStyle2OrStr] = UNSET
    """The border style of the block."""

    border_width: Optional[int] = UNSET
    """The border width of the block."""

    border_width_top: Optional[int] = UNSET
    """The border width of the top of the block."""

    border_width_bottom: Optional[int] = UNSET
    """The border width of the bottom of the block."""

    border_width_left: Optional[int] = UNSET
    """The border width of the left of the block."""

    border_width_right: Optional[int] = UNSET
    """The border width of the right of the block."""

    border_radius: Optional[int] = UNSET
    """The border radius of the block."""

    border_radius_top_left: Optional[int] = UNSET
    """The border radius of the top left of the block."""

    border_radius_top_right: Optional[int] = UNSET
    """The border radius of the top right of the block."""

    border_radius_bottom_left: Optional[int] = UNSET
    """The border radius of the bottom left of the block."""

    border_radius_bottom_right: Optional[int] = UNSET
    """The border radius of the bottom right of the block."""

    inner_spacing: Optional[int] = UNSET
    """The inner spacing of the block."""

    inner_spacing_top: Optional[int] = UNSET
    """The inner spacing of the top of the block."""

    inner_spacing_bottom: Optional[int] = UNSET
    """The inner spacing of the bottom of the block."""

    inner_spacing_left: Optional[int] = UNSET
    """The inner spacing of the left of the block."""

    inner_spacing_right: Optional[int] = UNSET
    """The inner spacing of the right of the block."""

    outer_spacing: Optional[int] = UNSET
    """The outer spacing of the block."""

    outer_spacing_top: Optional[int] = UNSET
    """The outer spacing of the top of the block."""

    outer_spacing_bottom: Optional[int] = UNSET
    """The outer spacing of the bottom of the block."""

    outer_spacing_left: Optional[int] = UNSET
    """The outer spacing of the left of the block."""

    outer_spacing_right: Optional[int] = UNSET
    """The outer spacing of the right of the block."""


class VisualSettings32Dict(TypedDict):
    background_color: NotRequired[str]
    text_color: NotRequired[str]
    border_color: NotRequired[str]
    border_style: NotRequired[BorderStyle2OrStr]
    border_width: NotRequired[int]
    border_width_top: NotRequired[int]
    border_width_bottom: NotRequired[int]
    border_width_left: NotRequired[int]
    border_width_right: NotRequired[int]
    border_radius: NotRequired[int]
    border_radius_top_left: NotRequired[int]
    border_radius_top_right: NotRequired[int]
    border_radius_bottom_left: NotRequired[int]
    border_radius_bottom_right: NotRequired[int]
    inner_spacing: NotRequired[int]
    inner_spacing_top: NotRequired[int]
    inner_spacing_bottom: NotRequired[int]
    inner_spacing_left: NotRequired[int]
    inner_spacing_right: NotRequired[int]
    outer_spacing: NotRequired[int]
    outer_spacing_top: NotRequired[int]
    outer_spacing_bottom: NotRequired[int]
    outer_spacing_left: NotRequired[int]
    outer_spacing_right: NotRequired[int]
