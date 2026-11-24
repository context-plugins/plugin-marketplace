from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateSlotTypeVersionRequest(SdkBaseModel):
    name: str
    """The name of the slot type that you want to create a new version for. The name is case sensitive."""

    checksum: Optional[str] = UNSET
    """Checksum for the $LATEST version of the slot type that you want to publish. If you specify a checksum and the
    $LATEST version of the slot type has a different checksum, Amazon Lex returns a PreconditionFailedException
    exception and doesn't publish the new version. If you don't specify a checksum, Amazon Lex publishes the $LATEST
    version."""


class CreateSlotTypeVersionRequestDict(TypedDict):
    name: str
    checksum: NotRequired[str]
