from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gs1_value import Gs1Value, Gs1ValueDict


class Gs1Metadata(SdkBaseModel):
    """Contains GS1 related metadata"""

    values: Optional[list[Gs1Value]] = UNSET
    """A list of GS1 application identifiers and their values"""


class Gs1MetadataDict(TypedDict):
    values: NotRequired[list[Gs1ValueDict]]
