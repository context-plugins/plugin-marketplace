from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class EducationApi(SdkBaseModel):
    major: OptionalNullable[str] = UNSET
    """Primary field of study of the educational experience"""

    school: OptionalNullable[str] = UNSET
    """School/University of the educational experience"""

    degree: OptionalNullable[str] = UNSET
    """Degree obtained through the educational experience"""

    start: OptionalNullable[int] = UNSET
    """Start date of the educational experience"""

    end: OptionalNullable[int] = UNSET
    """End date of the educational experience"""


class EducationApiDict(TypedDict):
    major: NotRequired[str | None]
    school: NotRequired[str | None]
    degree: NotRequired[str | None]
    start: NotRequired[int | None]
    end: NotRequired[int | None]
