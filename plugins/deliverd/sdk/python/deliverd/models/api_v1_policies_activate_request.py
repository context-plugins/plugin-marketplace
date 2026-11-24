from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1PoliciesActivateRequest(SdkBaseModel):
    version: int
    """The version number to put in force. The one it replaces is superseded"""


class ApiV1PoliciesActivateRequestDict(TypedDict):
    version: int
