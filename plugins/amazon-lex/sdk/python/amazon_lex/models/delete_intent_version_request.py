from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteIntentVersionRequest(SdkBaseModel):
    name: str
    """The name of the intent."""

    version: str
    """The version of the intent to delete. You cannot delete the $LATEST version of the intent. To delete the $LATEST
    version, use the DeleteIntent operation."""


class DeleteIntentVersionRequestDict(TypedDict):
    name: str
    version: str
