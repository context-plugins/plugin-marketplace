from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .operation import Operation, OperationDict
from .registered import Registered, RegisteredDict


class Addresses(SdkBaseModel):
    registered: Optional[Registered] = UNSET
    operation: Optional[Operation] = UNSET


class AddressesDict(TypedDict):
    registered: NotRequired[RegisteredDict]
    operation: NotRequired[OperationDict]
