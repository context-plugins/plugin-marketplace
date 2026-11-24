from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AcceleratorConfig(SdkBaseModel):
    """Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute
    Engine (https://cloud.google.com/compute/docs/gpus/)."""

    accelerator_type_uri: Optional[str] = Field(default=UNSET, alias="acceleratorTypeUri")
    """Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Compute
    Engine AcceleratorTypes (https://cloud.google.com/compute/docs/reference/v1/acceleratorTypes).Examples:
    https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4
    projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4Auto Zone Exception: If you are
    using Auto Zone Placement
    (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement), you must
    use the short name of the accelerator type resource, for example, nvidia-tesla-t4."""

    accelerator_count: Optional[int] = Field(default=UNSET, alias="acceleratorCount")
    """The number of the accelerator cards of this type exposed to this instance."""


class AcceleratorConfigDict(TypedDict):
    accelerator_type_uri: NotRequired[str]
    accelerator_count: NotRequired[int]
