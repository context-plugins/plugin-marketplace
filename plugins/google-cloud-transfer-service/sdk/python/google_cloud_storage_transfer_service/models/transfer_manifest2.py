from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TransferManifest2(SdkBaseModel):
    """A manifest file provides a list of objects to be transferred from the data source. This field points to the
    location of the manifest file. Otherwise, the entire source bucket is used. ObjectConditions still apply."""

    location: Optional[str] = UNSET
    """Specifies the path to the manifest in Cloud Storage. The Google-managed service account for the transfer must
    have ``storage.objects.get`` permission for this object. An example path is
    ``gs://bucket_name/path/manifest.csv``."""


class TransferManifest2Dict(TypedDict):
    location: NotRequired[str]
