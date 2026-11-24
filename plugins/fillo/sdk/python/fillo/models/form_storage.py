from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.destination_fillo_so_storage_api import DestinationFilloSoStorageApiOrStr
from .enums.resolved import ResolvedOrStr


class FormStorage(SdkBaseModel):
    destination: DestinationFilloSoStorageApiOrStr
    """The destination pinned on the form. ``none`` means the form follows the workspace default."""

    storage: Any | None
    """The stored destination record: provider (gdrive, box, or s3), an optional r2 variant, and any selected Drive
    folder."""

    resolved: ResolvedOrStr | None
    """Where an upload would actually land right now — including Fillo's short-lived transit staging. null means uploads
    are blocked."""


class FormStorageDict(TypedDict):
    destination: DestinationFilloSoStorageApiOrStr
    storage: Any | None
    resolved: ResolvedOrStr | None
