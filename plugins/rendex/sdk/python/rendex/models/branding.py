from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Branding(SdkBaseModel):
    """Optional theme applied to the artifact header, body, and footer."""

    logo: Optional[str] = UNSET
    """Absolute http(s) URL of a logo image shown in the header."""

    accent_color: Optional[str] = Field(default=UNSET, alias="accentColor")
    """CSS color for the accent bar"""

    font: Optional[str] = UNSET
    """CSS font-family stack applied to the body (e.g. 'Georgia"""

    header: Optional[str] = UNSET
    """Plain-text header line shown beside the logo."""

    footer: Optional[str] = UNSET
    """Plain-text footer line shown at the bottom of every page."""


class BrandingDict(TypedDict):
    logo: NotRequired[str]
    accent_color: NotRequired[str]
    font: NotRequired[str]
    header: NotRequired[str]
    footer: NotRequired[str]
