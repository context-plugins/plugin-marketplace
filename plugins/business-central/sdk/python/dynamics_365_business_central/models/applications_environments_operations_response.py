from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .environment_operation import EnvironmentOperation, EnvironmentOperationDict


class ApplicationsEnvironmentsOperationsResponse(SdkBaseModel):
    value: Optional[list[EnvironmentOperation]] = UNSET


class ApplicationsEnvironmentsOperationsResponseDict(TypedDict):
    value: NotRequired[list[EnvironmentOperationDict]]
