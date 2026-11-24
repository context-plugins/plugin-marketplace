from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateIntentVersionRequest(SdkBaseModel):
    name: str
    """The name of the intent that you want to create a new version of. The name is case sensitive."""

    checksum: Optional[str] = UNSET
    """Checksum of the $LATEST version of the intent that should be used to create the new version. If you specify a
    checksum and the $LATEST version of the intent has a different checksum, Amazon Lex returns a
    PreconditionFailedException exception and doesn't publish a new version. If you don't specify a checksum, Amazon Lex
    publishes the $LATEST version."""


class CreateIntentVersionRequestDict(TypedDict):
    name: str
    checksum: NotRequired[str]
