from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .document import Document, DocumentDict
from .usage import Usage, UsageDict


class ApiV1FileExtractResponse(SdkBaseModel):
    data: Optional[Any] = UNSET
    document: Optional[Document] = UNSET
    fields: Optional[list[Any]] = UNSET
    missing: Optional[list[str]] = UNSET
    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1FileExtractResponseDict(TypedDict):
    data: NotRequired[Any]
    document: NotRequired[DocumentDict]
    fields: NotRequired[list[Any]]
    missing: NotRequired[list[str]]
    usage: NotRequired[UsageDict]
