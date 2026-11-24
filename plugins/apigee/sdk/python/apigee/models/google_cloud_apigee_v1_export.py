from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1Export(SdkBaseModel):
    """Details of an export job."""

    created: Optional[str] = UNSET
    """Output only. Time the export job was created."""

    error: Optional[str] = UNSET
    """Output only. Error is set when export fails"""

    updated: Optional[str] = UNSET
    """Output only. Time the export job was last updated."""

    name: Optional[str] = UNSET
    """Display name of the export job."""

    self: Optional[str] = UNSET
    """Output only. Self link of the export job. A URI that can be used to retrieve the status of an export job.
    Example: ``/organizations/myorg/environments/myenv/analytics/exports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd``"""

    description: Optional[str] = UNSET
    """Description of the export job."""

    execution_time: Optional[str] = Field(default=UNSET, alias="executionTime")
    """Output only. Execution time for this export job. If the job is still in progress, it will be set to the amount of
    time that has elapsed since``created``, in seconds. Else, it will set to (``updated`` - ``created``), in seconds."""

    state: Optional[str] = UNSET
    """Output only. Status of the export job. Valid values include ``enqueued``, ``running``, ``completed``, and
    ``failed``."""

    datastore_name: Optional[str] = Field(default=UNSET, alias="datastoreName")
    """Name of the datastore that is the destination of the export job [datastore]"""


class GoogleCloudApigeeV1ExportDict(TypedDict):
    created: NotRequired[str]
    error: NotRequired[str]
    updated: NotRequired[str]
    name: NotRequired[str]
    self: NotRequired[str]
    description: NotRequired[str]
    execution_time: NotRequired[str]
    state: NotRequired[str]
    datastore_name: NotRequired[str]
