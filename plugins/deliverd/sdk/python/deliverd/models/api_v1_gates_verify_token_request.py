from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .destination13 import Destination13, Destination13Dict


class ApiV1GatesVerifyTokenRequest(SdkBaseModel):
    token: str
    """The ``decisionToken`` the gate carried"""

    action: str
    """The action you are about to perform"""

    input: dict[str, Any]
    """The input you are about to perform it with"""

    destination: Optional[Destination13] = UNSET
    """Where it lands. Required when the gate named a destination"""

    artifact_sha256: Optional[str] = Field(default=UNSET, alias="artifactSha256")
    """The sha256 of what you are sending. Required when the gate named an artifact"""


class ApiV1GatesVerifyTokenRequestDict(TypedDict):
    token: str
    action: str
    input: dict[str, Any]
    destination: NotRequired[Destination13Dict]
    artifact_sha256: NotRequired[str]
