from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.code import CodeOrStr
from .unions.path import Path, PathDict


class Issue(SdkBaseModel):
    code: OptionalNullable[CodeOrStr] = UNSET
    message: str
    path: OptionalNullable[list[Path]] = UNSET


class IssueDict(TypedDict):
    code: NotRequired[CodeOrStr | None]
    message: str
    path: NotRequired[list[PathDict] | None]
