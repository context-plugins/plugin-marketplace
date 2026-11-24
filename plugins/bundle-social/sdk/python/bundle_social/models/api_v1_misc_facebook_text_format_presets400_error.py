from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .issue import Issue, IssueDict


class ApiV1MiscFacebookTextFormatPresets400Error(SdkBaseModel):
    status_code: OptionalNullable[float] = Field(default=UNSET, alias="statusCode")
    message: str
    issues: OptionalNullable[list[Issue]] = UNSET


class ApiV1MiscFacebookTextFormatPresets400ErrorDict(TypedDict):
    status_code: NotRequired[float | None]
    message: str
    issues: NotRequired[list[IssueDict] | None]
