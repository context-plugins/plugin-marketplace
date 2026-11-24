from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .secret2 import Secret2, Secret2Dict


class KerberosConfig2(SdkBaseModel):
    """Configuration information for a Kerberos principal."""

    keytab: Optional[Secret2] = UNSET
    """Optional. A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key
    Distribution Center (KDC)."""

    principal: Optional[str] = UNSET
    """Optional. A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal
    is of the form primary/instance@REALM, but there is no exact format."""

    krb5_config_gcs_uri: Optional[str] = Field(default=UNSET, alias="krb5ConfigGcsUri")
    """Optional. A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form
    gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly."""


class KerberosConfig2Dict(TypedDict):
    keytab: NotRequired[Secret2Dict]
    principal: NotRequired[str]
    krb5_config_gcs_uri: NotRequired[str]
