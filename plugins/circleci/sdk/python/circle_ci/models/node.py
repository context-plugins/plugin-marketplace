from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Node(SdkBaseModel):
    image_id: Optional[str] = UNSET
    """The image ID used"""

    port: Optional[int] = UNSET
    """The SSH port"""

    public_ip_addr: Optional[str] = UNSET
    """The public IP address"""

    username: Optional[str] = UNSET
    """The SSH username"""


class NodeDict(TypedDict):
    image_id: NotRequired[str]
    port: NotRequired[int]
    public_ip_addr: NotRequired[str]
    username: NotRequired[str]
