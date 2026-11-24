from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteSlotTypeVersionRequest(SdkBaseModel):
    name: str
    """The name of the slot type."""

    version: str
    """The version of the slot type to delete. You cannot delete the $LATEST version of the slot type. To delete the
    $LATEST version, use the DeleteSlotType operation."""


class DeleteSlotTypeVersionRequestDict(TypedDict):
    name: str
    version: str
