from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AzureCredentials(SdkBaseModel):
    """Azure credentials For information on our data retention policy for user credentials, see `User credentials
    </storage-transfer/docs/data-retention#user-credentials>`__."""

    sas_token: Optional[str] = Field(default=UNSET, alias="sasToken")
    """Required. Azure shared access signature (SAS). For more information about SAS, see `Grant limited access to Azure
    Storage resources using shared access signatures (SAS)
    <https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview>`__."""


class AzureCredentialsDict(TypedDict):
    sas_token: NotRequired[str]
