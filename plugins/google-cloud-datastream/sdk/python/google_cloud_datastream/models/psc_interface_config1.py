from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PscInterfaceConfig1(SdkBaseModel):
    """PSC Interface Config."""

    network_attachment: Optional[str] = Field(default=UNSET, alias="networkAttachment")
    """Required. Fully qualified name of the Network Attachment that Datastream will connect to. Format:
    ``projects/{project}/regions/{region}/networkAttachments/{name}``"""


class PscInterfaceConfig1Dict(TypedDict):
    network_attachment: NotRequired[str]
