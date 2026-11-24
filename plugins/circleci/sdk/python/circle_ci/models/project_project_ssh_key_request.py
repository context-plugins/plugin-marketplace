from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ProjectProjectSshKeyRequest(SdkBaseModel):
    hostname: str
    """The hostname the key is associated with"""

    private_key: str
    """The private key in PEM format"""


class ProjectProjectSshKeyRequestDict(TypedDict):
    hostname: str
    private_key: str
