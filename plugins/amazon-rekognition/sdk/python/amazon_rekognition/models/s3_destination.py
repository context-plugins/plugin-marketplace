from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class S3Destination(SdkBaseModel):
    bucket: Optional[str] = Field(default=UNSET, alias="Bucket")
    """The name of the Amazon S3 bucket you want to associate with the streaming video project. You must be the owner of
    the Amazon S3 bucket."""

    key_prefix: Optional[str] = Field(default=UNSET, alias="KeyPrefix")
    """The prefix value of the location within the bucket that you want the information to be published to. For more
    information, see Using prefixes."""


class S3DestinationDict(TypedDict):
    bucket: NotRequired[str]
    key_prefix: NotRequired[str]
