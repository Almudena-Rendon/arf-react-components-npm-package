# DO-Product-Card

Este e sun paquete de pruebas de despliegue en NPM

### Almudena Rendón Fernández

### Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card';

```

```
<ProductCard 
    product={ product }
    initialValues={{
        count: 6,
        maxCount: 10,
    }}
>
    {
        ({ reset, count, isMaxCountReached, maxCount, increaseBy  }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>

```