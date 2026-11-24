from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TransferManifest(SdkBaseModel):
    """Specifies where the manifest is located."""

    location: Optional[str] = UNSET
    """Specifies the path to the manifest in Cloud Storage. The Google-managed service account for the transfer must
    have ``storage.objects.get`` permission for this object. An example path is
    ``gs://bucket_name/path/manifest.csv``."""


class TransferManifestDict(TypedDict):
    location: NotRequired[str]
