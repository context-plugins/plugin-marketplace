from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..bounded_data_file_storage_limits import BoundedDataFileStorageLimits, BoundedDataFileStorageLimitsDict
from ..unlimited_data_file_storage_limits import UnlimitedDataFileStorageLimits, UnlimitedDataFileStorageLimitsDict

LimitsHudPlatformDataApi: TypeAlias = Annotated[
    (
        Annotated[BoundedDataFileStorageLimits, Tag("bounded")]
        | Annotated[UnlimitedDataFileStorageLimits, Tag("unlimited")]
    ),
    WireDiscriminator("kind"),
]

LimitsHudPlatformDataApiDict: TypeAlias = BoundedDataFileStorageLimitsDict | UnlimitedDataFileStorageLimitsDict
