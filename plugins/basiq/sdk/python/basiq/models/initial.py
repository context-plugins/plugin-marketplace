from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .created import Created, CreatedDict


class Initial(SdkBaseModel):
    created: Optional[Created] = UNSET


class InitialDict(TypedDict):
    created: NotRequired[CreatedDict]
