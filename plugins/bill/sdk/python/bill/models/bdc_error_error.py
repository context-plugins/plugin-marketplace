from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.category import CategoryOrStr
from .enums.severity import SeverityOrStr
from .param_model import ParamModel, ParamModelDict


class BdcErrorError(SdkBaseModel):
    timestamp: RFC3339DateTime
    code: str
    severity: SeverityOrStr
    category: CategoryOrStr
    message: Optional[str] = UNSET
    params: Optional[list[ParamModel]] = UNSET
    detail: Optional[str] = UNSET
    help: Optional[str] = UNSET


class BdcErrorErrorDict(TypedDict):
    timestamp: RFC3339DateTime
    code: str
    severity: SeverityOrStr
    category: CategoryOrStr
    message: NotRequired[str]
    params: NotRequired[list[ParamModelDict]]
    detail: NotRequired[str]
    help: NotRequired[str]
