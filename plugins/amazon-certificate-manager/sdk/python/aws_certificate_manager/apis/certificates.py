from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.delete_certificate_error import DeleteCertificateErrorBody, delete_certificate_error_mapper
from ..errors.describe_certificate_error import DescribeCertificateErrorBody, describe_certificate_error_mapper
from ..errors.export_certificate_error import ExportCertificateErrorBody, export_certificate_error_mapper
from ..errors.get_certificate_error import GetCertificateErrorBody, get_certificate_error_mapper
from ..errors.import_certificate_error import ImportCertificateErrorBody, import_certificate_error_mapper
from ..errors.list_certificates_error import ListCertificatesErrorBody, list_certificates_error_mapper
from ..errors.request_certificate_error import RequestCertificateErrorBody, request_certificate_error_mapper
from ..errors.revoke_certificate_error import RevokeCertificateErrorBody, revoke_certificate_error_mapper
from ..errors.search_certificates_error import SearchCertificatesErrorBody, search_certificates_error_mapper
from ..models.enums.x_amz_target1_aws_certificate_manager_certificates_api import (
    XAmzTarget1AwsCertificateManagerCertificatesApiOrStr,
)
from ..models.enums.x_amz_target2_aws_certificate_manager_certificates_api import (
    XAmzTarget2AwsCertificateManagerCertificatesApiOrStr,
)
from ..models.enums.x_amz_target3_aws_certificate_manager_certificates_api import (
    XAmzTarget3AwsCertificateManagerCertificatesApiOrStr,
)
from ..models.enums.x_amz_target4_aws_certificate_manager_certificates_api import (
    XAmzTarget4AwsCertificateManagerCertificatesApiOrStr,
)
from ..models.enums.x_amz_target5 import XAmzTarget5OrStr
from ..models.enums.x_amz_target6 import XAmzTarget6OrStr
from ..models.enums.x_amz_target7 import XAmzTarget7OrStr
from ..models.enums.x_amz_target8 import XAmzTarget8OrStr
from ..models.enums.x_amz_target_aws_certificate_manager_certificates_api import (
    XAmzTargetAwsCertificateManagerCertificatesApiOrStr,
)
from ..server.server import Server


class Certificates:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CertificatesWithRawResponse(client, server, auth)

    def delete_certificate(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a certificate and its associated private key. If this action succeeds, the certificate is not
        available for use by Amazon Web Services services integrated with ACM. Deleting a certificate is eventually
        consistent. The may be a short delay before the certificate no longer appears in the list that can be displayed
        by calling the ListCertificates action or be retrieved by calling the GetCertificate action. You cannot delete
        an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in
        use, you must first remove the certificate association using the console or the CLI for the associated service.
        Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue
        to be charged for the CA until it is deleted. For more information, see Deleting Your Private CA in the Private
        Certificate Authority User Guide. You cannot delete a certificate with a CertificateKeyPairOrigin of ACME. ACM
        automatically deletes these certificates 1 year after they expire. Deleting a certificate issued by a private
        certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA u

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; InvalidArnException; ResourceInUseException;
                ResourceNotFoundException; ThrottlingException; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_certificate(x_amz_target, request_options=request_options))

    def describe_certificate(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Returns detailed metadata about the specified ACM certificate. If you have just created a certificate using
        the RequestCertificate action, there is a delay of several seconds before you can retrieve information about it.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; ResourceNotFoundException; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.describe_certificate(x_amz_target, request_options=request_options))

    def export_certificate(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Exports a private certificate issued by a private certificate authority (CA) or a public certificate for use
        anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private key
        associated with the public key that is embedded in the certificate. For security, you must assign a passphrase
        for the private key when exporting it. For information about exporting and formatting a certificate using the
        ACM console or CLI, see Export a private certificate and Export a public certificate. ACM public certificates
        created prior to June 17, 2025 cannot be exported.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; RequestInProgressException; ResourceNotFoundException; ThrottlingException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.export_certificate(x_amz_target, request_options=request_options))

    def get_certificate(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves a certificate and its certificate chain. The certificate may be either a public or private
        certificate issued using the ACM RequestCertificate action, or a certificate imported into ACM using the
        ImportCertificate action. The chain consists of the certificate of the issuing CA and the intermediate
        certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use OpenSSL to
        decode the certificates and inspect individual fields.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; RequestInProgressException; ResourceNotFoundException; ValidationException
                ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_certificate(x_amz_target, request_options=request_options))

    def import_certificate(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note
        that integrated services allow only certificate types and keys they support to be associated with their
        resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM.
        For more information, see the documentation for each service. For more information about importing certificates
        into ACM, see Importing Certificates in the Certificate Manager User Guide. ACM does not provide managed renewal
        for certificates that you import. Note the following guidelines when importing third party certificates: You
        must enter the private key that matches the certificate you are importing. The private key must be unencrypted.
        You cannot import a private key that is protected by a password or a passphrase. The private key must be no
        larger than 5 KB (5,120 bytes). The certificate, private key, and certificate chain must be PEM-encoded. The
        current time must be between the Not Before and Not After certificate fields. The Issuer field must not be
        empty. The OCSP authority URL, if present, must not exceed 1000 characters. To import a new certificate,

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException; InvalidArnException; InvalidParameterException; InvalidTagException;
                LimitExceededException; ResourceNotFoundException; TagPolicyException; TooManyTagsException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.import_certificate(x_amz_target, request_options=request_options))

    def list_certificates(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a
        specific status be listed. You can also filter by specific attributes of the certificate. Default filtering
        returns only RSA_2048 certificates. For more information, see Filters. By default, this action does not return
        certificates with a CertificateKeyPairOrigin of ACME. To include ACME certificates, specify ACME in the
        CertificateKeyPairOrigins filter.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArgsException; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_certificates(x_amz_target, request_options=request_options))

    def request_certificate(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate,
        you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify
        additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain
        validation is not required. If you are requesting a public certificate, each domain name that you specify must
        be validated to verify that you own or control the domain. You can use DNS validation or email validation. We
        recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate
        validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common
        name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds
        before you can retrieve information about the new certificate.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; InvalidDomainValidationOptionsException; InvalidParameterException;
                InvalidTagException; LimitExceededException; TagPolicyException; TooManyTagsException ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.request_certificate(x_amz_target, request_options=request_options))

    def revoke_certificate(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Revokes a public ACM certificate. You can only revoke certificates that have been previously exported. Once a
        certificate is revoked, you cannot reuse the certificate. Revoking a certificate is permanent.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; InvalidArnException; ResourceInUseException;
                ResourceNotFoundException; ThrottlingException; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.revoke_certificate(x_amz_target, request_options=request_options))

    def search_certificates(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves a list of certificates matching search criteria. You can filter certificates by X.509 attributes
        and ACM specific properties like certificate status, type and renewal eligibility. This operation provides more
        flexible filtering than ListCertificates by supporting complex filter statements.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ThrottlingException; ValidationException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.search_certificates(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> CertificatesWithRawResponse:
        return self._with_raw_response


class AsyncCertificates:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCertificatesWithRawResponse(client, server, auth)

    async def delete_certificate(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Deletes a certificate and its associated private key. If this action succeeds, the certificate is not
        available for use by Amazon Web Services services integrated with ACM. Deleting a certificate is eventually
        consistent. The may be a short delay before the certificate no longer appears in the list that can be displayed
        by calling the ListCertificates action or be retrieved by calling the GetCertificate action. You cannot delete
        an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in
        use, you must first remove the certificate association using the console or the CLI for the associated service.
        Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue
        to be charged for the CA until it is deleted. For more information, see Deleting Your Private CA in the Private
        Certificate Authority User Guide. You cannot delete a certificate with a CertificateKeyPairOrigin of ACME. ACM
        automatically deletes these certificates 1 year after they expire. Deleting a certificate issued by a private
        certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA u

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; InvalidArnException; ResourceInUseException;
                ResourceNotFoundException; ThrottlingException; ValidationException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_certificate(x_amz_target, request_options=request_options))

    async def describe_certificate(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Returns detailed metadata about the specified ACM certificate. If you have just created a certificate using
        the RequestCertificate action, there is a delay of several seconds before you can retrieve information about it.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; ResourceNotFoundException; ValidationException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.describe_certificate(x_amz_target, request_options=request_options))

    async def export_certificate(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Exports a private certificate issued by a private certificate authority (CA) or a public certificate for use
        anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private key
        associated with the public key that is embedded in the certificate. For security, you must assign a passphrase
        for the private key when exporting it. For information about exporting and formatting a certificate using the
        ACM console or CLI, see Export a private certificate and Export a public certificate. ACM public certificates
        created prior to June 17, 2025 cannot be exported.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; RequestInProgressException; ResourceNotFoundException; ThrottlingException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.export_certificate(x_amz_target, request_options=request_options))

    async def get_certificate(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Retrieves a certificate and its certificate chain. The certificate may be either a public or private
        certificate issued using the ACM RequestCertificate action, or a certificate imported into ACM using the
        ImportCertificate action. The chain consists of the certificate of the issuing CA and the intermediate
        certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use OpenSSL to
        decode the certificates and inspect individual fields.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; RequestInProgressException; ResourceNotFoundException; ValidationException
                ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_certificate(x_amz_target, request_options=request_options))

    async def import_certificate(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note
        that integrated services allow only certificate types and keys they support to be associated with their
        resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM.
        For more information, see the documentation for each service. For more information about importing certificates
        into ACM, see Importing Certificates in the Certificate Manager User Guide. ACM does not provide managed renewal
        for certificates that you import. Note the following guidelines when importing third party certificates: You
        must enter the private key that matches the certificate you are importing. The private key must be unencrypted.
        You cannot import a private key that is protected by a password or a passphrase. The private key must be no
        larger than 5 KB (5,120 bytes). The certificate, private key, and certificate chain must be PEM-encoded. The
        current time must be between the Not Before and Not After certificate fields. The Issuer field must not be
        empty. The OCSP authority URL, if present, must not exceed 1000 characters. To import a new certificate,

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConflictException; InvalidArnException; InvalidParameterException; InvalidTagException;
                LimitExceededException; ResourceNotFoundException; TagPolicyException; TooManyTagsException;
                ValidationException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.import_certificate(x_amz_target, request_options=request_options))

    async def list_certificates(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a
        specific status be listed. You can also filter by specific attributes of the certificate. Default filtering
        returns only RSA_2048 certificates. For more information, see Filters. By default, this action does not return
        certificates with a CertificateKeyPairOrigin of ACME. To include ACME certificates, specify ACME in the
        CertificateKeyPairOrigins filter.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArgsException; ValidationException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_certificates(x_amz_target, request_options=request_options))

    async def request_certificate(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate,
        you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify
        additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain
        validation is not required. If you are requesting a public certificate, each domain name that you specify must
        be validated to verify that you own or control the domain. You can use DNS validation or email validation. We
        recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate
        validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common
        name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds
        before you can retrieve information about the new certificate.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidArnException; InvalidDomainValidationOptionsException; InvalidParameterException;
                InvalidTagException; LimitExceededException; TagPolicyException; TooManyTagsException ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.request_certificate(x_amz_target, request_options=request_options))

    async def revoke_certificate(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Revokes a public ACM certificate. You can only revoke certificates that have been previously exported. Once a
        certificate is revoked, you cannot reuse the certificate. Revoking a certificate is permanent.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException; InvalidArnException; ResourceInUseException;
                ResourceNotFoundException; ThrottlingException; ValidationException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.revoke_certificate(x_amz_target, request_options=request_options))

    async def search_certificates(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves a list of certificates matching search criteria. You can filter certificates by X.509 attributes
        and ACM specific properties like certificate status, type and renewal eligibility. This operation provides more
        flexible filtering than ListCertificates by supporting complex filter statements.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ThrottlingException; ValidationException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.search_certificates(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCertificatesWithRawResponse:
        return self._with_raw_response


class CertificatesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_certificate(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCertificateErrorBody]:
        """Deletes a certificate and its associated private key. If this action succeeds, the certificate is not
        available for use by Amazon Web Services services integrated with ACM. Deleting a certificate is eventually
        consistent. The may be a short delay before the certificate no longer appears in the list that can be displayed
        by calling the ListCertificates action or be retrieved by calling the GetCertificate action. You cannot delete
        an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in
        use, you must first remove the certificate association using the console or the CLI for the associated service.
        Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue
        to be charged for the CA until it is deleted. For more information, see Deleting Your Private CA in the Private
        Certificate Authority User Guide. You cannot delete a certificate with a CertificateKeyPairOrigin of ACME. ACM
        automatically deletes these certificates 1 year after they expire. Deleting a certificate issued by a private
        certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA u

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteCertificate"),
            headers=[
                param[XAmzTargetAwsCertificateManagerCertificatesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=delete_certificate_error_mapper,
            request_options=request_options,
        )

    def describe_certificate(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeCertificateErrorBody]:
        """Returns detailed metadata about the specified ACM certificate. If you have just created a certificate using
        the RequestCertificate action, there is a delay of several seconds before you can retrieve information about it.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCertificate"),
            headers=[
                param[XAmzTarget1AwsCertificateManagerCertificatesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_certificate_error_mapper,
            request_options=request_options,
        )

    def export_certificate(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ExportCertificateErrorBody]:
        """Exports a private certificate issued by a private certificate authority (CA) or a public certificate for use
        anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private key
        associated with the public key that is embedded in the certificate. For security, you must assign a passphrase
        for the private key when exporting it. For information about exporting and formatting a certificate using the
        ACM console or CLI, see Export a private certificate and Export a public certificate. ACM public certificates
        created prior to June 17, 2025 cannot be exported.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ExportCertificate"),
            headers=[
                param[XAmzTarget2AwsCertificateManagerCertificatesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=export_certificate_error_mapper,
            request_options=request_options,
        )

    def get_certificate(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetCertificateErrorBody]:
        """Retrieves a certificate and its certificate chain. The certificate may be either a public or private
        certificate issued using the ACM RequestCertificate action, or a certificate imported into ACM using the
        ImportCertificate action. The chain consists of the certificate of the issuing CA and the intermediate
        certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use OpenSSL to
        decode the certificates and inspect individual fields.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetCertificate"),
            headers=[
                param[XAmzTarget3AwsCertificateManagerCertificatesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=get_certificate_error_mapper,
            request_options=request_options,
        )

    def import_certificate(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ImportCertificateErrorBody]:
        """Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note
        that integrated services allow only certificate types and keys they support to be associated with their
        resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM.
        For more information, see the documentation for each service. For more information about importing certificates
        into ACM, see Importing Certificates in the Certificate Manager User Guide. ACM does not provide managed renewal
        for certificates that you import. Note the following guidelines when importing third party certificates: You
        must enter the private key that matches the certificate you are importing. The private key must be unencrypted.
        You cannot import a private key that is protected by a password or a passphrase. The private key must be no
        larger than 5 KB (5,120 bytes). The certificate, private key, and certificate chain must be PEM-encoded. The
        current time must be between the Not Before and Not After certificate fields. The Issuer field must not be
        empty. The OCSP authority URL, if present, must not exceed 1000 characters. To import a new certificate,

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ImportCertificate"),
            headers=[
                param[XAmzTarget4AwsCertificateManagerCertificatesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=import_certificate_error_mapper,
            request_options=request_options,
        )

    def list_certificates(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListCertificatesErrorBody]:
        """Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a
        specific status be listed. You can also filter by specific attributes of the certificate. Default filtering
        returns only RSA_2048 certificates. For more information, see Filters. By default, this action does not return
        certificates with a CertificateKeyPairOrigin of ACME. To include ACME certificates, specify ACME in the
        CertificateKeyPairOrigins filter.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCertificates"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_certificates_error_mapper,
            request_options=request_options,
        )

    def request_certificate(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RequestCertificateErrorBody]:
        """Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate,
        you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify
        additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain
        validation is not required. If you are requesting a public certificate, each domain name that you specify must
        be validated to verify that you own or control the domain. You can use DNS validation or email validation. We
        recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate
        validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common
        name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds
        before you can retrieve information about the new certificate.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RequestCertificate"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=request_certificate_error_mapper,
            request_options=request_options,
        )

    def revoke_certificate(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RevokeCertificateErrorBody]:
        """Revokes a public ACM certificate. You can only revoke certificates that have been previously exported. Once a
        certificate is revoked, you cannot reuse the certificate. Revoking a certificate is permanent.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RevokeCertificate"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=revoke_certificate_error_mapper,
            request_options=request_options,
        )

    def search_certificates(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SearchCertificatesErrorBody]:
        """Retrieves a list of certificates matching search criteria. You can filter certificates by X.509 attributes
        and ACM specific properties like certificate status, type and renewal eligibility. This operation provides more
        flexible filtering than ListCertificates by supporting complex filter statements.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SearchCertificates"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=search_certificates_error_mapper,
            request_options=request_options,
        )


class AsyncCertificatesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_certificate(
        self,
        x_amz_target: XAmzTargetAwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteCertificateErrorBody]:
        """Deletes a certificate and its associated private key. If this action succeeds, the certificate is not
        available for use by Amazon Web Services services integrated with ACM. Deleting a certificate is eventually
        consistent. The may be a short delay before the certificate no longer appears in the list that can be displayed
        by calling the ListCertificates action or be retrieved by calling the GetCertificate action. You cannot delete
        an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in
        use, you must first remove the certificate association using the console or the CLI for the associated service.
        Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue
        to be charged for the CA until it is deleted. For more information, see Deleting Your Private CA in the Private
        Certificate Authority User Guide. You cannot delete a certificate with a CertificateKeyPairOrigin of ACME. ACM
        automatically deletes these certificates 1 year after they expire. Deleting a certificate issued by a private
        certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA u

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DeleteCertificate"),
            headers=[
                param[XAmzTargetAwsCertificateManagerCertificatesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=delete_certificate_error_mapper,
            request_options=request_options,
        )

    async def describe_certificate(
        self,
        x_amz_target: XAmzTarget1AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DescribeCertificateErrorBody]:
        """Returns detailed metadata about the specified ACM certificate. If you have just created a certificate using
        the RequestCertificate action, there is a delay of several seconds before you can retrieve information about it.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeCertificate"),
            headers=[
                param[XAmzTarget1AwsCertificateManagerCertificatesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_certificate_error_mapper,
            request_options=request_options,
        )

    async def export_certificate(
        self,
        x_amz_target: XAmzTarget2AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ExportCertificateErrorBody]:
        """Exports a private certificate issued by a private certificate authority (CA) or a public certificate for use
        anywhere. The exported file contains the certificate, the certificate chain, and the encrypted private key
        associated with the public key that is embedded in the certificate. For security, you must assign a passphrase
        for the private key when exporting it. For information about exporting and formatting a certificate using the
        ACM console or CLI, see Export a private certificate and Export a public certificate. ACM public certificates
        created prior to June 17, 2025 cannot be exported.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ExportCertificate"),
            headers=[
                param[XAmzTarget2AwsCertificateManagerCertificatesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=export_certificate_error_mapper,
            request_options=request_options,
        )

    async def get_certificate(
        self,
        x_amz_target: XAmzTarget3AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetCertificateErrorBody]:
        """Retrieves a certificate and its certificate chain. The certificate may be either a public or private
        certificate issued using the ACM RequestCertificate action, or a certificate imported into ACM using the
        ImportCertificate action. The chain consists of the certificate of the issuing CA and the intermediate
        certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use OpenSSL to
        decode the certificates and inspect individual fields.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#GetCertificate"),
            headers=[
                param[XAmzTarget3AwsCertificateManagerCertificatesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=get_certificate_error_mapper,
            request_options=request_options,
        )

    async def import_certificate(
        self,
        x_amz_target: XAmzTarget4AwsCertificateManagerCertificatesApiOrStr,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ImportCertificateErrorBody]:
        """Imports a certificate into Certificate Manager (ACM) to use with services that are integrated with ACM. Note
        that integrated services allow only certificate types and keys they support to be associated with their
        resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM.
        For more information, see the documentation for each service. For more information about importing certificates
        into ACM, see Importing Certificates in the Certificate Manager User Guide. ACM does not provide managed renewal
        for certificates that you import. Note the following guidelines when importing third party certificates: You
        must enter the private key that matches the certificate you are importing. The private key must be unencrypted.
        You cannot import a private key that is protected by a password or a passphrase. The private key must be no
        larger than 5 KB (5,120 bytes). The certificate, private key, and certificate chain must be PEM-encoded. The
        current time must be between the Not Before and Not After certificate fields. The Issuer field must not be
        empty. The OCSP authority URL, if present, must not exceed 1000 characters. To import a new certificate,

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ImportCertificate"),
            headers=[
                param[XAmzTarget4AwsCertificateManagerCertificatesApiOrStr]("X-Amz-Target", x_amz_target),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=import_certificate_error_mapper,
            request_options=request_options,
        )

    async def list_certificates(
        self, x_amz_target: XAmzTarget5OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListCertificatesErrorBody]:
        """Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a
        specific status be listed. You can also filter by specific attributes of the certificate. Default filtering
        returns only RSA_2048 certificates. For more information, see Filters. By default, this action does not return
        certificates with a CertificateKeyPairOrigin of ACME. To include ACME certificates, specify ACME in the
        CertificateKeyPairOrigins filter.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListCertificates"),
            headers=[param[XAmzTarget5OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_certificates_error_mapper,
            request_options=request_options,
        )

    async def request_certificate(
        self, x_amz_target: XAmzTarget8OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RequestCertificateErrorBody]:
        """Requests an ACM certificate for use with other Amazon Web Services services. To request an ACM certificate,
        you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify
        additional FQDNs in the SubjectAlternativeNames parameter. If you are requesting a private certificate, domain
        validation is not required. If you are requesting a public certificate, each domain name that you specify must
        be validated to verify that you own or control the domain. You can use DNS validation or email validation. We
        recommend that you use DNS validation. ACM behavior differs from the RFC 6125 specification of the certificate
        validation process. ACM first checks for a Subject Alternative Name, and, if it finds one, ignores the common
        name (CN). After successful completion of the RequestCertificate action, there is a delay of several seconds
        before you can retrieve information about the new certificate.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RequestCertificate"),
            headers=[param[XAmzTarget8OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=request_certificate_error_mapper,
            request_options=request_options,
        )

    async def revoke_certificate(
        self, x_amz_target: XAmzTarget6OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RevokeCertificateErrorBody]:
        """Revokes a public ACM certificate. You can only revoke certificates that have been previously exported. Once a
        certificate is revoked, you cannot reuse the certificate. Revoking a certificate is permanent.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#RevokeCertificate"),
            headers=[param[XAmzTarget6OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=revoke_certificate_error_mapper,
            request_options=request_options,
        )

    async def search_certificates(
        self, x_amz_target: XAmzTarget7OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SearchCertificatesErrorBody]:
        """Retrieves a list of certificates matching search criteria. You can filter certificates by X.509 attributes
        and ACM specific properties like certificate status, type and renewal eligibility. This operation provides more
        flexible filtering than ListCertificates by supporting complex filter statements.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#SearchCertificates"),
            headers=[param[XAmzTarget7OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=search_certificates_error_mapper,
            request_options=request_options,
        )
