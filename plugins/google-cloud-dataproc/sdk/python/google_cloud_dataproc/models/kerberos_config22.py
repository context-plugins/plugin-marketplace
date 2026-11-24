from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .secret2 import Secret2, Secret2Dict


class KerberosConfig22(SdkBaseModel):
    """Optional. Information used to configure the Hive metastore service as a service principal in a Kerberos realm. To
    disable Kerberos, use the UpdateService method and specify this field's path (hive_metastore_config.kerberos_config)
    in the request's update_mask while omitting this field from the request's service."""

    keytab: Optional[Secret2] = UNSET
    """Optional. A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key
    Distribution Center (KDC)."""

    principal: Optional[str] = UNSET
    """Optional. A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal
    is of the form primary/instance@REALM, but there is no exact format."""

    krb5_config_gcs_uri: Optional[str] = Field(default=UNSET, alias="krb5ConfigGcsUri")
    """Optional. A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form
    gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly."""


class KerberosConfig22Dict(TypedDict):
    keytab: NotRequired[Secret2Dict]
    principal: NotRequired[str]
    krb5_config_gcs_uri: NotRequired[str]
