from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1CustomCuration(SdkBaseModel):
    """Custom curation information for this plugin instance."""

    curation: Optional[str] = UNSET
    """Required. The unique name of the curation resource. This will be the name of the curation resource in the format:
    ``projects/{project}/locations/{location}/curations/{curation}``"""


class GoogleCloudApihubV1CustomCurationDict(TypedDict):
    curation: NotRequired[str]
