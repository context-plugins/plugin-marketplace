from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1PlaybooksUseRequest(SdkBaseModel):
    inputs: Optional[dict[str, str]] = UNSET
    """The prompt's inputs, by name; a placeholder not given stays in the words"""


class ApiV1PlaybooksUseRequestDict(TypedDict):
    inputs: NotRequired[dict[str, str]]
