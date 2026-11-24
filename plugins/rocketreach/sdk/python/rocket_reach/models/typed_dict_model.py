from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TypedDictModel(SdkBaseModel):
    npi_number: Optional[str] = UNSET
    """NPI number of the healthcare provider. An NPI is a unique 10-digit number used to identify health care
    providers"""

    credentials: Optional[str] = UNSET
    """Professional qualifications or designations earned by a healthcare provider, such as MD, DO, NP, or RN."""

    license_number: Optional[str] = UNSET
    """A state-issued number that authorizes a healthcare provider to practice in a specific state or field."""

    specialization: Optional[str] = UNSET
    """The specific area of medicine or healthcare in which a provider focuses, such as cardiology, pediatrics, or
    dermatology."""


class TypedDictModelDict(TypedDict):
    npi_number: NotRequired[str]
    credentials: NotRequired[str]
    license_number: NotRequired[str]
    specialization: NotRequired[str]
