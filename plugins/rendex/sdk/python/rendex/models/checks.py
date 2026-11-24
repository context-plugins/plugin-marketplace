from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dependency_check import DependencyCheck, DependencyCheckDict


class Checks(SdkBaseModel):
    database: Optional[DependencyCheck] = UNSET
    billing: Optional[DependencyCheck] = UNSET


class ChecksDict(TypedDict):
    database: NotRequired[DependencyCheckDict]
    billing: NotRequired[DependencyCheckDict]
