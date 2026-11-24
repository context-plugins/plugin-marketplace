from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Grade(SdkBaseModel):
    grade: Optional[str] = UNSET
    count: Optional[int] = UNSET
    with_qualifier: Optional[int] = Field(default=UNSET, alias="withQualifier")
    """Copies graded with a qualifier, for example 9 OC"""


class GradeDict(TypedDict):
    grade: NotRequired[str]
    count: NotRequired[int]
    with_qualifier: NotRequired[int]
