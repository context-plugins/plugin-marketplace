from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ComposerProvider(str, Enum):
    """Cloud provider or platform, using the Console's provider names."""

    AWS = "aws"
    AZURE = "azure"
    AZURE_AD = "azure_ad"
    GCP = "gcp"
    GENERAL = "general"
    GOOGLE_CLOUD_SOURCE = "google_cloud_source"
    GOOGLE_WORKSPACE = "google_workspace"
    K8S = "k8s"
    OCI = "oci"
    VMWARE = "vmware"

    __str__ = str.__str__


ComposerProviderOrStr: TypeAlias = Annotated[ComposerProvider | str, open_enum_validator(ComposerProvider)]
