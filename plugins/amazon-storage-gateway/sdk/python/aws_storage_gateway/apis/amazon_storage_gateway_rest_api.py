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
from ..errors.activate_gateway_error import ActivateGatewayErrorBody, activate_gateway_error_mapper
from ..errors.create_nfs_file_share_error import CreateNfsFileShareErrorBody, create_nfs_file_share_error_mapper
from ..errors.describe_gateway_information_error import (
    DescribeGatewayInformationErrorBody,
    describe_gateway_information_error_mapper,
)
from ..errors.list_gateways_error import ListGatewaysErrorBody, list_gateways_error_mapper
from ..errors.list_volumes_error import ListVolumesErrorBody, list_volumes_error_mapper
from ..models.enums.x_amz_target import XAmzTargetOrStr
from ..models.enums.x_amz_target1 import XAmzTarget1OrStr
from ..models.enums.x_amz_target2 import XAmzTarget2OrStr
from ..models.enums.x_amz_target3 import XAmzTarget3OrStr
from ..models.enums.x_amz_target4 import XAmzTarget4OrStr
from ..server.server import Server


class AmazonStorageGatewayRestApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AmazonStorageGatewayRestApiWithRawResponse(client, server, auth)

    def activate_gateway(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Activates the gateway you previously deployed on your host. In the activation process, you specify
        information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time
        zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your
        gateway. The activation process also associates your gateway with your account. For more information, see
        UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.activate_gateway(x_amz_target, request_options=request_options))

    def create_nfs_file_share(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file
        share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using
        an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token
        Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web
        Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon
        Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to
        activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web
        Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_nfs_file_share(x_amz_target, request_options=request_options))

    def describe_gateway_information(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software
        version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your
        request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.describe_gateway_information(x_amz_target, request_options=request_options)
        )

    def list_gateways(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the
        request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a
        maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of
        gateways returned in a response. If you have more gateways than are returned in a response (that is, the
        response returns only a truncated list of your gateways), the response contains a marker that you can specify in
        your next request to fetch the next page of gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_gateways(x_amz_target, request_options=request_options))

    def list_volumes(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the
        volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the
        DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum
        of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in
        the response. If the number of volumes returned in the response is truncated, the response includes a Marker
        field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This
        operation is only supported in the cached volume and stored volume gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_volumes(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AmazonStorageGatewayRestApiWithRawResponse:
        return self._with_raw_response


class AsyncAmazonStorageGatewayRestApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAmazonStorageGatewayRestApiWithRawResponse(client, server, auth)

    async def activate_gateway(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Activates the gateway you previously deployed on your host. In the activation process, you specify
        information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time
        zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your
        gateway. The activation process also associates your gateway with your account. For more information, see
        UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.activate_gateway(x_amz_target, request_options=request_options))

    async def create_nfs_file_share(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file
        share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using
        an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token
        Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web
        Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon
        Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to
        activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web
        Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_nfs_file_share(x_amz_target, request_options=request_options)
        )

    async def describe_gateway_information(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software
        version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your
        request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.describe_gateway_information(x_amz_target, request_options=request_options)
        )

    async def list_gateways(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the
        request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a
        maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of
        gateways returned in a response. If you have more gateways than are returned in a response (that is, the
        response returns only a truncated list of your gateways), the response contains a marker that you can specify in
        your next request to fetch the next page of gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_gateways(x_amz_target, request_options=request_options))

    async def list_volumes(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the
        volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the
        DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum
        of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in
        the response. If the number of volumes returned in the response is truncated, the response includes a Marker
        field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This
        operation is only supported in the cached volume and stored volume gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InternalServerError InvalidGatewayRequestException ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_volumes(x_amz_target, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAmazonStorageGatewayRestApiWithRawResponse:
        return self._with_raw_response


class AmazonStorageGatewayRestApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def activate_gateway(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ActivateGatewayErrorBody]:
        """Activates the gateway you previously deployed on your host. In the activation process, you specify
        information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time
        zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your
        gateway. The activation process also associates your gateway with your account. For more information, see
        UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ActivateGateway"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=activate_gateway_error_mapper,
            request_options=request_options,
        )

    def create_nfs_file_share(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateNfsFileShareErrorBody]:
        """Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file
        share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using
        an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token
        Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web
        Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon
        Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to
        activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web
        Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateNFSFileShare"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=create_nfs_file_share_error_mapper,
            request_options=request_options,
        )

    def describe_gateway_information(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeGatewayInformationErrorBody]:
        """Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software
        version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your
        request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeGatewayInformation"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=describe_gateway_information_error_mapper,
            request_options=request_options,
        )

    def list_gateways(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListGatewaysErrorBody]:
        """Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the
        request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a
        maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of
        gateways returned in a response. If you have more gateways than are returned in a response (that is, the
        response returns only a truncated list of your gateways), the response contains a marker that you can specify in
        your next request to fetch the next page of gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListGateways"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_gateways_error_mapper,
            request_options=request_options,
        )

    def list_volumes(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListVolumesErrorBody]:
        """Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the
        volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the
        DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum
        of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in
        the response. If the number of volumes returned in the response is truncated, the response includes a Marker
        field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This
        operation is only supported in the cached volume and stored volume gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVolumes"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=empty_response,
            error_mapper=list_volumes_error_mapper,
            request_options=request_options,
        )


class AsyncAmazonStorageGatewayRestApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def activate_gateway(
        self, x_amz_target: XAmzTargetOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ActivateGatewayErrorBody]:
        """Activates the gateway you previously deployed on your host. In the activation process, you specify
        information such as the Amazon Web Services Region that you want to use for storing snapshots or tapes, the time
        zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your
        gateway. The activation process also associates your gateway with your account. For more information, see
        UpdateGatewayInformation. You must turn on the gateway VM before you can activate your gateway.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ActivateGateway"),
            headers=[param[XAmzTargetOrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=activate_gateway_error_mapper,
            request_options=request_options,
        )

    async def create_nfs_file_share(
        self, x_amz_target: XAmzTarget2OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreateNfsFileShareErrorBody]:
        """Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage Gateway, a file
        share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using
        an NFS interface. This operation is only supported for S3 File Gateways. S3 File gateway requires Security Token
        Service (Amazon Web Services STS) to be activated to enable you to create a file share. Make sure Amazon Web
        Services STS is activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If Amazon
        Web Services STS is not activated in the Amazon Web Services Region, activate it. For information about how to
        activate Amazon Web Services STS, see Activating and deactivating Amazon Web Services STS in an Amazon Web
        Services Region in the Identity and Access Management User Guide. S3 File Gateways do not support creating hard
        or symbolic links on a file share.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#CreateNFSFileShare"),
            headers=[param[XAmzTarget2OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=create_nfs_file_share_error_mapper,
            request_options=request_options,
        )

    async def describe_gateway_information(
        self, x_amz_target: XAmzTarget4OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DescribeGatewayInformationErrorBody]:
        """Returns metadata about a gateway such as its name, network interfaces, time zone, status, and software
        version. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your
        request.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#DescribeGatewayInformation"),
            headers=[param[XAmzTarget4OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=describe_gateway_information_error_mapper,
            request_options=request_options,
        )

    async def list_gateways(
        self, x_amz_target: XAmzTarget3OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListGatewaysErrorBody]:
        """Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region specified in the
        request. The returned list is ordered by gateway Amazon Resource Name (ARN). By default, the operation returns a
        maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of
        gateways returned in a response. If you have more gateways than are returned in a response (that is, the
        response returns only a truncated list of your gateways), the response contains a marker that you can specify in
        your next request to fetch the next page of gateways.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListGateways"),
            headers=[param[XAmzTarget3OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_gateways_error_mapper,
            request_options=request_options,
        )

    async def list_volumes(
        self, x_amz_target: XAmzTarget1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ListVolumesErrorBody]:
        """Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the
        volume ARNs. If you want additional volume information, use the DescribeStorediSCSIVolumes or the
        DescribeCachediSCSIVolumes API. The operation supports pagination. By default, the operation returns a maximum
        of up to 100 volumes. You can optionally specify the Limit field in the body to limit the number of volumes in
        the response. If the number of volumes returned in the response is truncated, the response includes a Marker
        field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This
        operation is only supported in the cached volume and stored volume gateway types.

        Args:
            x_amz_target: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/#ListVolumes"),
            headers=[param[XAmzTarget1OrStr]("X-Amz-Target", x_amz_target), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_empty_response,
            error_mapper=list_volumes_error_mapper,
            request_options=request_options,
        )
