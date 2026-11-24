from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class SocialLinks1(SdkBaseModel):
    linkedin: Optional[str] = UNSET
    facebook: OptionalNullable[str] = UNSET
    """Company Facebook page URL. Included automatically when available - no ``reveal`` entry needed. Omitted from the
    response when not available (never returned empty). Free field - no credits charged. Available on all plans."""

    x: OptionalNullable[str] = UNSET
    """Company X (formerly Twitter) profile URL. Included automatically when available - no ``reveal`` entry needed.
    Omitted from the response when not available (never returned empty). Free field - no credits charged. Available on
    all plans."""


class SocialLinks1Dict(TypedDict):
    linkedin: NotRequired[str]
    facebook: NotRequired[str | None]
    x: NotRequired[str | None]
