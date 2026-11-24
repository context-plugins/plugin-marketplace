from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.method import MethodOrStr


class Capability(SdkBaseModel):
    method: MethodOrStr
    """HTTP method of the operation"""

    path: str
    """Path of the operation as written in this reference, with path parameters"""


class CapabilityDict(TypedDict):
    method: MethodOrStr
    path: str
