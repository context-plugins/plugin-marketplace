from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document_sapling_generation_api import DocumentSaplingGenerationApi, DocumentSaplingGenerationApiDict
from .enums.length import LengthOrStr
from .usage import Usage, UsageDict


class ApiV1FileSummarizeResponse(SdkBaseModel):
    document: Optional[DocumentSaplingGenerationApi] = UNSET
    key_points: Optional[list[str]] = UNSET
    length: Optional[LengthOrStr] = UNSET
    result: Optional[str] = UNSET
    """Same as ``summary`` (legacy key)."""

    summary: Optional[str] = UNSET
    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1FileSummarizeResponseDict(TypedDict):
    document: NotRequired[DocumentSaplingGenerationApiDict]
    key_points: NotRequired[list[str]]
    length: NotRequired[LengthOrStr]
    result: NotRequired[str]
    summary: NotRequired[str]
    usage: NotRequired[UsageDict]
