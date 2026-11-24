from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ImportFormatResponse(SdkBaseModel):
    format: Literal["harbor"] = "harbor"
    title: str
    description: Optional[str] = UNSET
    max_input_bytes: int
    """The largest bundle an import of this format takes"""


class ImportFormatResponseDict(TypedDict):
    format: Literal["harbor"]
    title: str
    description: NotRequired[str]
    max_input_bytes: int
